# Importing the pandas package.
import pandas as pd
def processdata():
    # Loading and reading the CSV file.
    df = pd.read_csv('AccidentesShortTextoWithClusters.csv', sep = ';', nrows = 1000)
    # Converting the CSV data to a list.
    df = df.to_dict(orient = 'records')
    return df