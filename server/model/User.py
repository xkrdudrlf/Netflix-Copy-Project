from marshmallow import Schema, fields, validates, ValidationError
from server import db


class UserSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True)
    bookmarks = fields.List(fields.Dict())

    @validates("email")
    def validate_email(self, value):
        duplicate = db.users.find_one({"email": value})
        if duplicate:
            raise ValidationError("email already exists.")

    @validates("password")
    def validate_password(self, value):
        if len(value) < 8:
            raise ValidationError(
                "password should consist of at least 8 characters")
