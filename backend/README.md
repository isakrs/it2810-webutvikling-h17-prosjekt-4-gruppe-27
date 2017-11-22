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
  	user: {_id: 1, username: isak}
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
    user: {_id: 0, username: "marius"}
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



**Delete review by id**

DELETE

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json', 'Authorization': 'Bearer <token>'}
```



### Companies

API updates `company.averageRating` and `company.nComments` as reviews are created and deleted


**Search**

GET

```typescript
url: 'api/company/?name=${term}'
```
Returns list over companies where company.name contains `term`.

`term` (string) is not case sensitive, i.e. 'Google' and 'google' would have equal response.

Optionial Arguments:
  `?top=x`, where x (int) are the top x company results based on company.averageRating

  `?skip=x&size=y`, where x (int) is number of skipped results before desired result and y (int) are the number of desired results.



**Get all companies**

```typescript
url: 'api/company'
```

som returner alle companies:

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

som returner (for GET url: 'api/companies/1'):

```typescript
{_id: "1", name: "DNB", averageRating: 2.2, nComments: 14}
```

**Filter companies**

Filter companies on averageRating and nComments

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

Chaining of filters and pagination is plausible. eg.

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



**Delete company by id**

### krever auth

DELETE

```typescript
url: 'api/company/<id>'
headers: {
  'Content-type': 'application/json',
  'headers': {'Authorization': 'Bearer <token>'}
}
```


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

Data Model

```typescript
{
  _id: string,
  username: string,
  password: string
}
```


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

Returns solely response 200


**Token validation**

POST

```typescript
url: 'auth/verify'
headers: {'Content-Type': 'application/json'}
body: {token: 'alødkføalkdjvøak'}
```

Returner solely response 200.
