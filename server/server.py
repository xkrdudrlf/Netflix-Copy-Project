import pymongo

# Connect to MongoDB
try:
    mongo = pymongo.MongoClient(
        host="localhost", port=27017, serverSelectionTimeoutMS=1000
    )
    db = mongo.takflix
    mongo.server_info
except:
    print("Error - cannot connect to DB")
