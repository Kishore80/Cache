This is to Mimic a Simple Caching Scenario

1. Two API'S

no-cache/index.html

This API is to read the data from Original Source

with-cache

This API will check if data exist in cache
    If exist , return data from cache
        This can be witnessed by no loading time
    Else
        Read Data from Source and Store in cache and Return data

no-cache/index.html : This has a loading of 3 seconds
with-cache : For the first call it will load for 3 seconds
           : For Subsequent calls , the data is fetched from cache
