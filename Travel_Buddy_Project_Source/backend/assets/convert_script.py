# import csv
# import json

# # Define the input .dat file path and output .json file path
# dat_file_path = './airports.dat'  # Your .dat file path
# json_file_path = 'airports.json'  # Desired .json file path

# # Define the column names for the fields (match this with the data structure)
# columns = [
#     'id', 'name', 'city', 'country', 'iata_code', 'icao_code',
#     'latitude', 'longitude', 'altitude', 'timezone_offset',
#     'dst', 'timezone', 'type', 'source'
# ]

# # Read the .dat file and convert to JSON with UTF-8 encoding
# with open(dat_file_path, mode='r', encoding='utf-8') as dat_file:  # Explicitly set the encoding to 'utf-8'
#     # Use csv.reader to read the file if it's delimited (comma, tab, etc.)
#     csv_reader = csv.reader(dat_file, delimiter=',')  # Change delimiter if necessary

#     # Create a list to store all records
#     data = []

#     # Iterate over each row and convert it to a dictionary with columns as keys
#     for row in csv_reader:
#         row_data = {columns[i]: row[i] for i in range(len(columns))}
#         data.append(row_data)

# # Write the list of dictionaries to a JSON file
# with open(json_file_path, 'w', encoding='utf-8') as json_file:  # Explicitly set the encoding to 'utf-8'
#     json.dump(data, json_file, indent=4)

# print(f"Conversion complete. Data saved to {json_file_path}.")


# import csv
# import json

# # Define the input .dat file path and output .json file path
# dat_file_path = './airlines.dat'  # Your .dat file path
# json_file_path = 'airlines.json'  # Desired .json file path

# # Define the column names based on the structure of the data
# columns = [
#     'id', 'name', 'alias', 'iata', 'icao', 'callsign', 'country', 'active'
# ]

# # Function to handle special characters (like \N) and convert them to None
# def replace_null(value):
#     return None if value == '\\N' else value

# # Read the .dat file and convert to JSON with UTF-8 encoding
# with open(dat_file_path, mode='r', encoding='utf-8') as dat_file:
#     # Use csv.reader to read the file as it's comma-separated
#     csv_reader = csv.reader(dat_file, delimiter=',')
    
#     # Create a list to store all records
#     data = []

#     # Iterate over each row and convert it to a dictionary with columns as keys
#     for row in csv_reader:
#         # Replace \N with None using list comprehension and replace_null function
#         row_data = {columns[i]: replace_null(row[i]) for i in range(len(columns))}
#         data.append(row_data)

# # Write the list of dictionaries to a JSON file
# with open(json_file_path, 'w', encoding='utf-8') as json_file:
#     json.dump(data, json_file, indent=4)

# print(f"Conversion complete. Data saved to {json_file_path}.")


# import csv
# import json

# # Define the input and output file paths
# csv_file_path = './countries.dat'  # Your CSV file path
# json_file_path = './countries.json'  # Desired output JSON file path

# # Define the column names based on the structure of your data
# columns = ['country_name', 'country_code', 'alias']

# # Read the CSV file and convert to JSON
# data = []
# with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
    
#     # Iterate over each row and convert it to a dictionary with column names as keys
#     for row in csv_reader:
#         row_data = {columns[i]: row[i].strip('"') for i in range(len(columns))}
#         data.append(row_data)

# # Write the list of dictionaries to a JSON file
# with open(json_file_path, 'w', encoding='utf-8') as json_file:
#     json.dump(data, json_file, indent=4)

# print(f"Conversion complete. Data saved to {json_file_path}.")


# import csv
# import json

# # Define the input CSV file path and output JSON file path
# csv_file_path = './planes.dat'  # Your CSV file path
# json_file_path = './planes.json'  # Desired JSON file path

# # Define the column names for the fields
# columns = ['plane_name', 'icao_code', 'iata_code']

# # Read the CSV file and convert to JSON
# data = []
# with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
    
#     # Iterate over each row and convert it to a dictionary with column names as keys
#     for row in csv_reader:
#         row_data = {columns[i]: row[i].strip('"') for i in range(len(columns))}
#         data.append(row_data)

# # Write the list of dictionaries to a JSON file
# with open(json_file_path, 'w', encoding='utf-8') as json_file:
#     json.dump(data, json_file, indent=4)

# print(f"Conversion complete. Data saved to {json_file_path}.")


import csv
import json

# Define the input CSV file path and output JSON file path
csv_file_path = './routes.dat'  # Your CSV file path
json_file_path = './routes.json'  # Desired JSON file path

# Define the column names for the fields
columns = [
    'airline_code', 'flight_number', 'departure_airport', 'departure_airport_id', 
    'arrival_airport', 'arrival_airport_id', 'codeshare', 'stops', 'aircraft_code'
]

# Read the CSV file and convert to JSON
data = []
with open(csv_file_path, mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    
    # Iterate over each row and convert it to a dictionary with column names as keys
    for row in csv_reader:
        row_data = {columns[i]: row[i] if row[i] != '\\N' else None for i in range(len(columns))}
        data.append(row_data)

# Write the list of dictionaries to a JSON file
with open(json_file_path, 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, indent=4)

print(f"Conversion complete. Data saved to {json_file_path}.")
