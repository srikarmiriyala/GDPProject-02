describe("Login Component Tests", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("/login");
  });

  it("should render the login form with all input fields", () => {
    cy.get("[data-testid='login-title']").should("exist").and("contain", "Login");
    cy.get("[data-testid='email-input']").should("exist");
    cy.get("[data-testid='password-input']").should("exist");
    cy.get("[data-testid='login-button-lower']").should("exist");
  });

  it("should display error when trying to submit with empty fields", () => {
    cy.get("[data-testid='login-button-lower']").click();

    // Check for the error toast
    cy.get(".Toastify__toast", { timeout: 20000 })
      .should("exist")
      .and("contain", "Please fill out all fields.");
  });

  it("should successfully submit the form and redirect to home on success", () => {
    // Mock the API response
    cy.intercept("POST", "/api/auth/login", {
      statusCode: 200,
      body: {
        access_token: "mock_token",
        user: { id: 1, name: "John Doe", email: "johndoe@example.com" },
      },
    }).as("loginRequest");

    cy.get("[data-testid='email-input']").type("johndoe@example.com");
    cy.get("[data-testid='password-input']").type("password123");

    cy.get("[data-testid='login-button-lower']").click();

    // Wait for the API call
    cy.wait("@loginRequest");

    // Check for the success toast
    cy.get(".Toastify__toast", { timeout: 10000 })
      .should("exist")
      .and("contain", "Login successful! Redirecting to home...");

    // Verify redirection to the home page
    cy.url().should("include", "/");
  });

  it("should display error when API call fails", () => {
    // Mock the API failure response
    cy.intercept("POST", "/api/auth/login", {
      statusCode: 401,
      body: { error: "Invalid credentials" },
    }).as("loginRequest");

    cy.get("[data-testid='email-input']").type("johndoe@example.com");
    cy.get("[data-testid='password-input']").type("wrongpassword");

    cy.get("[data-testid='login-button-lower']").click();

    // Wait for the API call
    cy.wait("@loginRequest");

    // Check for the error toast
    cy.get(".Toastify__toast", { timeout: 10000 })
      .should("exist")
      .and("contain", "Login failed. Please try again.");
  });

  it("should disable the submit button while loading", () => {
    // Mock the API response with a delay
    cy.intercept("POST", "/api/auth/login", (req) => {
      req.reply({
        delayMs: 2000, // Introduce a 2-second delay
        statusCode: 200,
        body: {
          access_token: "mock_token",
          user: { id: 1, name: "John Doe", email: "johndoe@example.com" },
        },
      });
    }).as("loginRequest");

    // Fill in the email and password
    cy.get("[data-testid='email-input']").type("johndoe@example.com");
    cy.get("[data-testid='password-input']").type("password123");

    // Click the login button
    cy.get("[data-testid='login-button-lower']").click();

    // Verify the button is disabled and shows the loading text while the request is in progress
    cy.get("[data-testid='login-button-lower']")
      .should("contain", "Logging in...")
      .and("be.disabled");

    // Wait for the API response
    cy.wait("@loginRequest");

    // Ensure button is enabled after the response
    cy.get("[data-testid='login-button-lower']").should("not.be.disabled");
  });
});
