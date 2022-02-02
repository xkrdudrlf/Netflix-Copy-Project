from flask import request
from flask_restful import Resource
from marshmallow import ValidationError

from model.User import UserSchema

from server import db

class User(Resource):
    schema = UserSchema()

    def get(self):
        try:
            user = request.get_json()
            email = user['email']
            user = db.users.find_one({"email": email})
            if not user:
                return {'message': f'user with {email} as email does not exist'}, 404

            user["_id"] = str(user["_id"])
            return user, 200

        except KeyError as err:
            return {'message': f'{err} is required to search a user'}, 400

    def post(self):
        try:
            newUser = request.get_json()
            newUser = self.schema.load(newUser)

            dbResponse = db.users.insert_one(newUser)

            return {'message': 'user created', 'id': f"{dbResponse.inserted_id}"}, 200

        except ValidationError as err:
            return {'message': f'{err.messages}'}, 400

    def delete(self):
        try:
            user = request.get_json()
            email = user['email']
            result = db.users.delete_one({"email": email})

            if result.deleted_count == 0:
                return {'message': 'no user to delete'}, 404

            return {'message': 'a user has been successfully deleted'}, 200
        except KeyError as err:
            return {'message': f'{err} is required to delete a user'}, 400

    def put(self):
        try:
            user = request.get_json()
            email = user['email']
            db.users.update_one({"email": email}, {"$set": {"password": user['password']} })
            return {'message': 'a user info has been successfully updated'}, 200
        except KeyError as err:
            return {'message': f'{err} is required to update a user'}, 400