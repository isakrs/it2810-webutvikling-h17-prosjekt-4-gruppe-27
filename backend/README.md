## Datamodeller

#### Eksempel på reviews

```typescript
reviews = [
  {_id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3},
  {_id: 1, rating: 3, comment: 'Loved working here.', idCompany: 4},
  {_id: 2, rating: 4, comment: 'Loved working here.', idCompany: 2},
  {_id: 3, rating: 5, comment: 'Loved working here.', idCompany: 3},
  {_id: 4, rating: 2, comment: 'Loved working here.', idCompany: 4},
  {_id: 5, rating: 1, comment: 'Loved working here.', idCompany: 3},
  {_id: 6, rating: 3, comment: 'Loved working here.', idCompany: 4},
  {_id: 7, rating: 3, comment: 'Loved working here.', idCompany: 8} 
]
```



#### Eksempel på companies

```typescript
companies = [
  {_id: 1, name: 'Statoil',      averageRating: null, nComments: null},
  {_id: 2, name: 'Amazon',       averageRating: 3,    nComments: 3},
  {_id: 3, name: 'Google',       averageRating: 3.3,  nComments: 9},
  {_id: 4, name: 'Kickstarter',  averageRating: null, nComments: null},
  {_id: 5, name: 'Apple',        averageRating: 2.1,  nComments: 43},
  {_id: 7, name: 'Microsoft',    averageRating: null, nComments: null},
  {_id: 8, name: 'Dell',         averageRating: null, nComments: null}
]
```



### Endepunkter vi trenger

### Reviews

#### GET

1. **Get reviews by idCompany**

```typescript
url: 'api/review/company/<idCompany>'
```

Eksempel:
GET url: 'api/reviews/3' skal returnere:

````typescript
[
  {_id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3},
  {_id: 3, rating: 5, comment: 'Loved working here.', idCompany: 3},
  {_id: 5, rating: 1, comment: 'Loved working here.', idCompany: 3}
]
````



#### POST

1. **Create new review**

POST

Backend genererer ny unik id til review.

Returnerer nye review

```typescript
url: 'api/review'
headers: {'Content-type': 'application/json'}
data: {rating: 3, comment: 'Loved working here.', idCompany: 8}
```

2. **Delete review by id**

DELETE

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json'}
data: {idCompany: 3}
```

3. **Update review by id**

PUT

Returnerer oppdaterte review

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json'}
data: {_id: 0, rating: 3, comment: 'I guess it was okay.', idCompany: 3}
```



###Companies

Backend må utføre kalkulasjoner for å oppdatere attributtene

```
averageRating
```

```
nComments
```



#### GET
## Search
GET
Returnerer en liste over companies som matcher term på company.name. 
```
url: 'api/company/?name=${term}'
```


1. **Get all companies**

```typescript
url: 'api/company'
```

som returner alle companies:

```typescript
[
  {_id: 1, name: 'Statoil',      averageRating: null, nComments: null},
  {_id: 2, name: 'Amazon',       averageRating: 3,    nComments: 3},
  {_id: 3, name: 'Google',       averageRating: 3.3,  nComments: 9},
  {_id: 4, name: 'Kickstarter',  averageRating: null, nComments: null},
  {_id: 5, name: 'Apple',        averageRating: 2.1,  nComments: 43},
  {_id: 7, name: 'Microsoft',    averageRating: null, nComments: null},
  {_id: 8, name: 'Dell',         averageRating: null, nComments: null}
]
```

2. **Get company by id**

```typescript
url: 'api/company/<id>'
```

som returner (for GET url: 'api/companies/1'):

```typescript
{_id: 1, name: 'DNB', averageRating: 2.2, nComments: 14}
```

3. **Filter companies**

Filtrering på >= minRating og/eller >= minComments 

```typescript
url: api/companies/?minRating=4.4
```

```typescript
url: api/companies/?minComments=3
```

```typescript
url: api/companies/?minRating=4.4&minComments=2
```



#### POST

1. **Create new company**

Generer en unik id.

Returnerer nye company

```typescript
url: 'api/company'
headers: {'Content-type': 'application/json'}
{name: 'Facebook'}
```



2. **Delete company by id**

DELETE

```typescript
url: 'api/company/<id>'
```

```typescript
headers: {'Content-type': 'application/json'}
```



3. **Update company **

PUT

F.eks. ved endring av navn.

Returnerer oppdaterte company.

```typescript
url: 'api/company/<id>'
headers: {'Content-type': 'application/json'}
{name: 'SBanken'}
```





## User

Kommer



