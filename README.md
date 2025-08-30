# Flask + React Todo App

A simple todo application built with Flask backend and React frontend.

## Features

- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Edit todo titles

## Tech Stack

**Backend:**
- Flask
- SQLAlchemy
- SQLite database
- Flask-CORS

**Frontend:**
- React
- JavaScript (ES6+)
- Fetch API for HTTP requests

## Setup Instructions

### Backend (Flask)

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Create a virtual environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies
```bash
pip install flask flask-sqlalchemy flask-cors
```

4. Run the Flask server
```bash
python run.py
```

The API will be available at `http://localhost:5000`

### Frontend (React)

1. Navigate to your React app directory
2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The React app will be available at `http://localhost:3000`

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

## Project Structure

```
project/
├── app/
│   ├── __init__.py
│   ├── models.py
│   └── routes.py
├── run.py
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

*NOTE*
This was made with prompt engineering using Chat GPT5 and Claude
