import pymongo

# Connect to MongoDB
try:
    mongo = pymongo.MongoClient("mongodb+srv://xkrdudrlf:cjscld1014@cluster0.gadmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    db = mongo.takflix
    mongo.server_info
except Exception as err:
    print(err)
    print("Error - cannot connect to DB")

# mongo = pymongo.MongoClient(
#     host="localhost", port=27017, serverSelectionTimeoutMS=1000
# )