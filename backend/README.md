#kjører på it2810-27.idi.ntnu.no:8084/

## Datamodeller

#### Eksempel på reviews

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



#### Eksempel på companies

```typescript
companies = [
  {_id: "1", name: "Statoil",      averageRating: null, nComments: null},
  {_id: "2", name: "Amazon",       averageRating: 3,    nComments: 3},
  {_id: "3", name: "Google",       averageRating: 3.3,  nComments: 9}
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
  {_id: "0", rating: 5, comment: "Loved working here.", idCompany: "3", idUser: "0", username: "marius"},
  {_id: "3", rating: 5, comment: "Loved this place.",   idCompany: "3", idUser: "0", username: "marius"},
  {_id: "5", rating: 1, comment: "sucks.",              idCompany: "3", idUser: "2", username: "jdawg"}
]
```

#### GET

1. **Get a user's reviews**

```typescript
url: 'api/review/user'
headers: {'Authorization': 'Bearer <token>'}
```

Returnerer _id, username og reviews gjort av denne brukeren

```json
data = [
  {
    _id: "0", rating: 5, comment: "Loved working here.", idCompany: "3", 		
    user: {_id: 0, username: marius}
  },	
  {
    _id: "1", rating: 3, comment: "Loved working here.", idCompany: "4", 
  	user: {_id: "0", username: "marius"}
  } 
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
data: {rating: 3, comment: "Loved working here.", idCompany: "8", idUser: "0", username: "marius"}
```

2. **Delete review by id**

DELETE

```typescript
url: 'api/review/<id>'
headers: {'Content-type': 'application/json'}
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

term er ikke case-sensetivt. det vil si Gooogl og google vil være likt
andre:
søk er: ?top=x , hvor x er de x høeste baser på avgRating
?skip=x&size=y både x og u er ints. skips sier noe om hvor mange man skal hoppe over, y er størrelsen på chunken man henter ut.
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
  {_id: "1", name: "Statoil",      averageRating: null, nComments: null},
  {_id: "2", name: "Amazon",       averageRating: 3,    nComments: 3},
  {_id: "3", name: "Google",       averageRating: 3.3,  nComments: 9}
]
```

1. **Get company by id**

```typescript
url: 'api/company/<id>'
```

som returner (for GET url: 'api/companies/1'):

```typescript
{_id: "1", name: "DNB", averageRating: 2.2, nComments: 14}
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
###krever auth
Generer en unik id.

Returnerer nye company

```typescript
url: 'api/company'
headers: {'Content-type': 'application/json'}
{name: 'Facebook'}
```



1. **Delete company by id**
###krever auth
DELETE

```typescript
url: 'api/company/<id>'
```

```typescript
headers: {'Content-type': 'application/json'}
```



1. **Update company**
Krever auth
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

#### POST

1. **Login**

```typescript
url: 'auth/login'
headers: {'Content-Type': 'application/json'}
{username: 'marius', password: 'password'}
```

Returnerer username og token

```
data = [
  {
    username: 'marius',
    token: 'abc123123123',
  }
]
```

2. **Register**

```typescript
url: 'auth/signup'
headers: {'Content-Type': 'application/json'}
{username: 'marius', password: 'password'}
```

Returnerer ingen data men respons 200

3. **Auth**

Validerer token

```typescript
url: 'auth/verify'
headers: {'Authorization': 'Bearer <token>'}
```

Returner ingen data men respons 200.

