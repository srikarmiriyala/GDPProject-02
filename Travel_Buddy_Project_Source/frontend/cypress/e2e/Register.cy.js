describe("Register Component Tests", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should render the registration form with all input fields", () => {
    cy.get("input#fullName").should("exist");
    cy.get("input#email").should("exist");
    cy.get("input#password").should("exist");
    cy.contains("button", "Register").should("exist");
  });

  it("should display error when trying to submit with empty fields", () => {
    cy.contains("button", "Register").click();

    // Check for the error toast
    cy.get(".Toastify__toast--error", { timeout: 20000 }).should("contain", "Please fill out all fields.");
  });

  it("should successfully submit the form and redirect to login on success", () => {
    cy.intercept("POST", "/api/auth/register", {
      statusCode: 201,
      body: { message: "Success" },
    });

    cy.get("input#fullName").type("John Doe");
    cy.get("input#email").type("johndoe@example.com");
    cy.get("input#password").type("password123");
    cy.contains("button", "Register").click();

    // Check for success toast
    cy.get(".Toastify__toast--success").should(
      "contain",
      "Registration successful! Redirecting to login..."
    );

    // Verify redirection to the login page
    cy.url().should("include", "/login");
  });

  it("should display error when API call fails", () => {
    cy.intercept("POST", "/api/auth/register", {
      statusCode: 500,
      body: { error: "Network Error" },
    });

    cy.get("input#fullName").type("John Doe");
    cy.get("input#email").type("johndoe@example.com");
    cy.get("input#password").type("password123");
    cy.contains("button", "Register").click();

    // Check for error toast
    cy.get(".Toastify__toast--error", { timeout: 6000 }).should(
      "contain",
      "Registration failed. Please try again."
    );
  });

  it("should disable the submit button while loading", () => {
    cy.intercept("POST", "/api/auth/register", (req) => {
      req.reply((res) => {
        res.delay(2000).send({ success: true });
      });
    });

    cy.get("input#fullName").type("John Doe");
    cy.get("input#email").type("johndoe@example.com");
    cy.get("input#password").type("password123");
    cy.contains("button", "Register").click();

    // Verify the button is disabled while loading
    cy.contains("button", "Registering...").should("be.disabled");
  });
});
