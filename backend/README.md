## Datamodeller

#### Eksempel på reviews

```json
reviews = [
  {
    _id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3,    user: {_id: 0, username: marius}
  },  
  {
    _id: 1, rating: 3, comment: 'Loved working here.', idCompany: 4, 
    user: {_id: 1, username: isak}
  } 
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

```typescript
[
  {_id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3, idUser: 0, username: marius},
  {_id: 3, rating: 5, comment: 'Loved working here.', idCompany: 3, idUser: 0, username: marius},
  {_id: 5, rating: 1, comment: 'Loved working here.', idCompany: 3, idUser: 2, username: jdawg}
]
```



#### POST

1. **Create new review**

POST

Backend genererer ny unik id til review.

Returnerer nye review

```typescript
url: 'api/review'
headers: {'Content-type': 'application/json'}
data: {rating: 3, comment: 'Loved working here.', idCompany: 8, idUser: 0, username: marius}
```

2. **Delete review by id**

DELETE

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json'}
data: {idCompany: 3}
```

### Companies

Backend må utføre kalkulasjoner for å oppdatere attributtene

```
averageRating
```

```
nComments
```



#### GET

#####  Search

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

1. **Get company by id**

```typescript
url: 'api/company/<id>'
```

som returner (for GET url: 'api/companies/1'):

```typescript
{_id: 1, name: 'DNB', averageRating: 2.2, nComments: 14}
```

1. **Filter companies**

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



1. **Delete company by id**

DELETE

```typescript
url: 'api/company/<id>'
```

```typescript
headers: {'Content-type': 'application/json'}
```



1. **Update company**

PUT
F.eks. ved endring av navn.

Returnerer oppdaterte company.

```typescript
url: 'api/company/<id>'
headers: {'Content-type': 'application/json'}
{name: 'SBanken'}
```





## User

Datamodell

```typescript
{
  _id: string,
  username: string,
  password: string
}
```

#### GET

```typescript
url: 'api/review/user/<id>'
```

Returnerer _id, username og reviews gjort av denne brukeren


```json
data = [
  {
    _id: 0, rating: 5, comment: 'Loved working here.', idCompany: 3,    user: {_id: 0, username: marius}
  },  
  {
    _id: 1, rating: 3, comment: 'Loved working here.', idCompany: 4, 
    user: {_id: 0, username: marius}
  } 
]
```


