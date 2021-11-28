#Importing the pandas package.
import pandas as pd
def processdata():
    # Loading and reading the CSV file.
    df = pd.read_csv('dataframeNormalizado.csv', sep = ';',nrows = 1000)
    # Converting the CSV data to a list.
    df = df.to_dict(orient = 'records')
    return df
"""
import chardet
import pandas as pd

def processdata():
    with open('dataframeNormalizado.csv', 'rb') as f:
        result = chardet.detect(f.read())  # or readline if the file is large
    df = pd.read_csv('dataframeNormalizado.csv', sep = ';', encoding=result['encoding'])
    # Converting the CSV data to a list.
    df = df.to_dict(orient = 'records')
    return df
"""