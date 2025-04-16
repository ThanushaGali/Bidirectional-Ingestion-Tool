# Bidirectional-Ingestion-Tool
git add backend
# ClickHouse ↔ Flat File Data Ingestion Tool

## Overview

The **ClickHouse ↔ Flat File Data Ingestion Tool** is a Java-based web application designed to facilitate bidirectional data ingestion between **ClickHouse** and flat file formats (CSV, TSV, etc.). The tool supports seamless integration and provides features such as JWT authentication, schema discovery, column selection, and record count reporting.

## Features

- **Bidirectional Data Ingestion**: Transfer data from ClickHouse to flat files and vice versa.
- **JWT Authentication**: Secure API access with JSON Web Token authentication.
- **Schema Discovery**: Automatically detect the schema of the source data.
- **Column Selection**: Choose specific columns to export/import.
- **Record Count Reporting**: View the number of records transferred in each operation.
- **Backend in Java**: The backend is implemented in Java, leveraging libraries for working with ClickHouse and flat files.
- **Frontend Integration**: Frontend is built using HTML, CSS, and JavaScript.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Java (Spring Boot for API, JDBC for database interaction)
- **Database**: ClickHouse
- **Authentication**: JWT (JSON Web Token)
- **File Formats**: CSV, TSV (Flat File Formats)

## Installation

### Prerequisites

- Java 11 or higher
- ClickHouse Database
- Maven (for building the backend)
- Web browser (for frontend usage)

### Steps

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/ThanushaGali/ClickHouse-FlatFile-Ingestion-Tool.git
    cd ClickHouse-FlatFile-Ingestion-Tool
    ```

2. **Backend Setup**:

    - Navigate to the backend directory:
      ```bash
      cd backend
      ```

    - Build the project using Maven:
      ```bash
      mvn clean install
      ```

    - Configure ClickHouse connection in `application.properties`:
      ```properties
      clickhouse.url=jdbc:clickhouse://<your-clickhouse-server>:<port>/<database>
      clickhouse.username=<your-username>
      clickhouse.password=<your-password>
      ```

    - Start the backend server:
      ```bash
      mvn spring-boot:run
      ```

3. **Frontend Setup**:

    - Navigate to the frontend directory:
      ```bash
      cd ../frontend
      ```

    - Open `index.html` in your browser.

4. **Access the Application**:
    - Open your browser and go to `http://localhost:8080` to use the tool.

## Usage

1. **Ingest Data from ClickHouse to Flat File**:
    - Use the API endpoint to export data from a ClickHouse table to a CSV or TSV file.
    - Select the columns you want to export and specify the output file format.

2. **Ingest Data from Flat File to ClickHouse**:
    - Upload a CSV or TSV file to import data into ClickHouse.
    - The tool automatically detects the schema and uploads the data into the specified table.

3. **View Record Counts**:
    - The tool reports the number of records processed during each ingestion.

4. **Authentication**:
    - Use the provided JWT token to authenticate API requests.

## API Endpoints

### 1. **POST /api/export**
   Export data from ClickHouse to a flat file (CSV/TSV).

   - **Request Body**:
     ```json
     {
       "table": "example_table",
       "columns": ["column1", "column2"],
       "file_format": "csv"
     }
     ```

### 2. **POST /api/import**
   Import data from a flat file to ClickHouse.

   - **Request Body**:
     ```json
     {
       "file": "<file_path>",
       "table": "example_table"
     }
     ```

### 3. **GET /api/record-count**
   Get the record count of a specific table or file.

   - **Request Parameters**: 
     - `source`: ClickHouse or FlatFile
     - `source_details`: Table name or file path

## Contributing

We welcome contributions to enhance this tool. Feel free to fork the repository and create a pull request. Please make sure to follow the existing code style and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
