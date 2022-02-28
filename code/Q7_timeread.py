from http import server
from pymongo import MongoClient
from pprint import pprint
import pandas as pd
import pprint
import time
## Import csv 

df = pd.read_csv("./communes-departement-region.csv")


client = MongoClient('localhost:27017')
db = client.France


start = time.time()

for index, rows in df.iterrows():
    db.communes.find_one({'nom_commune':rows['nom_commune']})
    

print("--- %s seconds ---" % (time.time() - start))



