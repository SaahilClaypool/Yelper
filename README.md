# Yelper

API to search yelp 


Built upon react, typescript, C# and websockets / Asp.net core


## Notes

Make a comparison app

Search and select up to two places. Will show name at top, stars, price, and list of ratings

bottom of each will show a "take me there" icon --> load google maps with the location of that place

Misc:

switch to bootstrap?

Make pretty colors

Design better layout for new loaded content 

Make search search for up to ~20 results. Repeat query if the user scrolls to the end of the results or something? 


```json
{
    "id": "christian-schmidt-attorney-at-law-oakland",
    "name": "Christian Schmidt, Attorney At Law",
    "image_url": "https://s3-media3.fl.y elpcdn.com/bphoto/H7dSPk9WxfH2aHqdOag5fQ/o.jpg",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/christian-schmidt-attorney-at-law-oakland?adjust_creative=9RBhr xshhu9VbesoD4HKFg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=9RBhrxshhu9VbesoD4HKFg",
    "review_count": 16,
    "categories": [
        {
            "alias": "immigr ationlawyers",
            "title": "Immigration Law"
        }
    ],
    "rating": 5,
    "coordinates": {
        "latitude": 37.79124,
        "longitude": -122.4028665
    },
    "transactions": [],
    "location": {
        "addre ss1": "1611 Telegraph Ave",
        "address2": "Ste 720",
        "address3": "",
        "city": "Oakland",
        "zip_code": "94612",
        "country": "US",
        "state": "CA",
        "display_address": [
            "1611 Telegraph Ave",
            "Ste 720",
            "Oakland, CA 94612"
        ]
    },
    "phone": "+14158340600",
    "display_phone": "(415) 834-0600",
    "distance": 3460.9011196639995
}
```