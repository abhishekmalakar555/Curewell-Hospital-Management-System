# CureWell Hospital Management System

CureWell is a full-stack hospital management system built using React, Node.js, Express, and MySQL. It is designed to manage doctor records, specializations, and surgery schedules through a simple and structured web interface.


## Features

- View all doctors
- Add a new doctor
- Update doctor details
- Delete doctor records
- View all specializations
- View doctors by specialization
- View today’s surgeries
- Update surgery timing


## Note

The **View Today’s Surgery** module fetches surgery records based on the current system date. To see records in this section, the MySQL database should contain surgery data for the current date.


## Tech Stack

### Frontend
- React
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js

### Database
- MySQL

## Project Structure

The project is divided into three main parts:

- **Frontend:** React-based user interface
- **Backend:** Node.js and Express REST API
- **Database:** MySQL database with tables for doctor, specialization, doctor specialization, and surgery

## Database Tables

- `doctor`
- `specialization`
- `doctorspecialization`
- `surgery`

## Functional Modules

### Doctor Management
Users can view the list of doctors, add new doctors, update existing doctor details, and delete doctors if they are not linked with surgeries.

### Specialization Management
Users can view all specializations and see the list of doctors associated with a selected specialization.

### Surgery Management
Users can view today’s surgeries and update surgery start and end time.

### Purpose of the Project

This project was developed as an academic full-stack application to demonstrate the integration of frontend, backend, and database technologies in a real-world hospital management scenario.

### Author

Abhishek Malakar
