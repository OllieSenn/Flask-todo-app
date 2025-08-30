from flask import Blueprint, request, jsonify
from .models import Todo
from .import db

main=Blueprint('main', __name__, url_prefix='/api')

@main.route('/')
def home():
    return jsonify({"message": "Flask to-do API is running!"})

@main.route('/todos', methods=['GET'])
def get_todos():
    todos=Todo.query.all()
    return jsonify([{'id': t.id, 'title': t.title, 'done': t.done} for t in todos])

@main.route('/todos', methods=['POST'])
def add_todo():
    data = request.get_json()
    new_todo = Todo(title=data['title'])
    db.session.add(new_todo)
    db.session.commit()
    return jsonify({'message': 'Todo added'}), 201

@main.route('/todos/<int:id>', methods=['PUT'])
def update_todo(id):
    todo = Todo.query.get_or_404(id)
    data = request.get_json()
    todo.title = data.get('title', todo.title)
    todo.done = data.get('done', todo.done)
    db.session.commit()
    return jsonify({'message': 'Todo updated'})

@main.route('/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return jsonify({'message': 'Todo deleted'})
