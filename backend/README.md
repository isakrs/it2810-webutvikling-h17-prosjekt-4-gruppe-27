#  Url: `http://it2810-27.idi.ntnu.no:8084/`

## Data models

#### Example reviews

```typescript
reviews = [
  {
    _id: "0", rating: 5, comment: "Loved working here.", idCompany: "3", 		user: {_id: "0", username: "marius"}
  },
  {
    _id: "1", rating: 3, comment: "Loved working here.", idCompany: "4",
  	user: {_id: "1", username: "isak"}
  }
]
```



#### Example companies

```typescript
companies = [
  {_id: "1", name: "Statoil",      averageRating: null, nComments: null},
  {_id: "2", name: "Amazon",       averageRating: 3,    nComments: 3},
  {_id: "3", name: "Google",       averageRating: 3.3,  nComments: 9}
]
```



#### Example user

```typescript
user = {
  _id: string,
  username: string,
  password: string
}
```



## API endpoints

### Reviews


**Get reviews by idCompany**

GET

```typescript
url: 'api/review/company/<idCompany>'
```

Example:
GET `url: 'api/reviews/3'` returns:

```typescript
[
  {_id: "3", rating: 5, comment: "Loved this place.",   idCompany: "3", idUser: "0", username: "marius"},
  {_id: "5", rating: 1, comment: "sucks.",              idCompany: "3", idUser: "2", username: "jdawg"}
]
```



**Get a user's reviews**

GET

```typescript
url: 'api/review/user'
headers: {Authorization: 'Bearer <token>'}
```

Returns reviews by the user.

```typescript
data = [
  {
    _id: "0", rating: 5, comment: "Loved working here.", idCompany: "3", 		
    user: {_id: "0", username: "marius"}
  },
  {
    _id: "1", rating: 3, comment: "Loved working here.", idCompany: "4",
  	user: {_id: "0", username: "marius"}
  }
]
```



**Create new review**

POST

```typescript
url: 'api/review'
headers: {'Content-type': 'application/json', 'Authorization': 'Bearer <token>'}
body: {rating: 3, comment: "Loved working here.", idCompany: "8"}
```

Returns the new review

```typescript
data = {
  _id: "5a15bc9f7d44bcad8b253aa2", 
  rating: 1, 
  comment: "sucks", 
  idCompany: "5a15b03b7d44bcad8b253a90", 
  user: {username: "marius", _id:"5a15af797d44bcad8b253a88"}
}
```



**Delete review by id**

DELETE

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json', 'Authorization': 'Bearer <token>'}
```

Returns nothing but response: 200



### Companies

API updates `company.averageRating` and `company.nComments` as reviews are created and deleted



**Get all companies**

```typescript
url: 'api/company'
```

Returns all companies

```typescript
[
  {_id: "1", name: "Statoil",      averageRating: null, nComments: null},
  {_id: "2", name: "Amazon",       averageRating: 3,    nComments: 3},
  {_id: "3", name: "Google",       averageRating: 3.3,  nComments: 9}
]
```



**Get company by id**

```typescript
url: 'api/company/<id>'
```

Returns for GET url: 'api/companies/1':

```typescript
{_id: "1", name: "DNB", averageRating: 2.2, nComments: 14}
```



**Search**

GET

```typescript
url: 'api/company/?name=${term}'
```
Returns list over companies where company.name contains `term`.

`term` (string) is not case sensitive, i.e. 'Google' and 'google' would have equal response.



**Filter companies**

Filter companies on min `company.averageRating` and min `company.nComments`

GET

```typescript
url: api/companies/?minRating=4.4
```

GET

```typescript
url: api/companies/?minComments=3
```

GET

```typescript
url: api/companies/?minRating=4.4&minComments=2
```

All the above requests return company objects in an array. 



**Top Companies**

Return top N (int) companies bases on averageRating.

GET

```typescript
url: api/company/?top=<N>
```



**Pagination**

Returns companies between skip (int) and size (int)

GET

```typescript
url: api/company/?skip=5&size=10
```



**Chaining of filters and pagination**

Chaining of filters and pagination is possible. e.g.

GET

```typescript
url: api/companies/?skip=5&size=10&minRating=4.4&minComments=2
```



**Create new company**

POST

```typescript
url: 'api/company'
headers: {
  'Content-type': 'application/json',
  'headers': {'Authorization': 'Bearer <token>'}
}
body: {name: 'Facebook'}
```

Returns the new company created



**Delete company by id**

DELETE

```typescript
url: 'api/company/<id>'
headers: {
  'Content-type': 'application/json',
  'headers': {'Authorization': 'Bearer <token>'}
}
```

Returns nothing but response: 200



**Update company**

PUT

```typescript
url: 'api/company/<id>'
headers: {
  'Content-type': 'application/json',
  'headers': {'Authorization': 'Bearer <token>'}
}
body: {name: 'SBanken'}
```



### User


**Login**

POST

```typescript
url: 'auth/login'
headers: {'Content-Type': 'application/json'}
{username: 'marius', password: 'password'}
```

Returns

```typescript
data = [
  {
    username: 'marius',
    token: 'abc123123123',
  }
]
```



**Register**

POST

```typescript
url: 'auth/signup'
headers: {'Content-Type': 'application/json'}
{username: 'marius', password: 'password'}
```

Returns nothing but response 200



**Token validation**

POST

```typescript
url: 'auth/verify'
headers: {'Content-Type': 'application/json'}
body: {token: 'alødkføalkdjvøak'}
```

Returner solely response 200.
