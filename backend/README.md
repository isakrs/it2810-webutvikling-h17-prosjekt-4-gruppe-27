#  Backend Glassdoor

#### Hvordan kjøre prosjektet? 

##### 1. Installer alle dependencies

```bash
$ npm install --save
```

##### 2.  Velg en av følgende

- Kjør alle tester med testcov. 

```bash
$npm run test
```

- Kjør i produksjon. Denne vil først kompilere typescript og deretter bruke node for å start

```bash
$ npm start
```

- Kjør dev. Denne vil bruke Nodemon og ts-node for å kunne starte serveren ved filendringer. Denne vil bruke port 3000. 

```bash
$ npm run dev
```



## API endpoints

#### Generelt 

Noen av endepunktene til dette APIet krever at man har en gyldig token. Denne skal være i Header på følgende måte. 

```http
Authorization:Bearer <token>
```

Hvor token anskaffes gjennom å logge seg inn. Alle endepunkter som krever dette er market med dette. Se autentisering for nærmere informasjon om dette 



For alle request som sender data: POST, PUT, DELETE. Kreves det at headeren Content-Type er satt på følgende måte

```http
Content-Type: application/json
```

 

##### **NB**  basUrl = host:port   

### Autentisering

Dette apiet bruker Bearer token for beskyttede endepunkter. For å kunne få en slik token må man først registrere en bruker, deretter logge in. 



#### Register

**Method: POST**

**URL**: host:port/auth/signup

*Sample request*

```Json
{"username": "marius", 
 "password": "password"}
```

*Sample respond*

Returnere status 200 hvis OK, 400 hvis det ikke gikk 

#### Login

**Method: POST**

**URL**: host:port/auth/login

*Sample request*

```json
{"username": "marius", 
 "password": "password"}
```

*Sample respons*

Status: 200

```Json
  {
    "username": "marius",
    "token": "token",
  }
```

Status: 401, hvis ikke gyldig



#### Token validation

**Method: POST**

**URL**: host:port/auth/verify

```json
{"token": "alødkføalkdjvøak"}
```

*Sample response*

Returnere 200 hvis gyldig, 401 hvis ikke gyldig







### Reviews


**Get reviews by idCompany**

**Method: GET**

**URL**: host:port/review/company/<IdCompany>

*Sample request*

```http
GET host:port/review/company/<IdCompany>
```

*Sample response*

```http
STATUS 200
```



```typescript
[
  {_id: "3", rating: 5, comment: "Loved this place.",   idCompany: "3", idUser: "0", username: "marius"},
  {_id: "5", rating: 1, comment: "sucks.",              idCompany: "3", idUser: "2", username: "jdawg"}
]
```



**Get a user's reviews**

**Method: GET**

**URL**: host:port/review/user

**Auth**:TRUE

*Sample request*

```http
GET host:port/review/review/
```

*response*

```json

  [{
    "_id": "0", "rating": 5, "comment": "Loved working here.", "idCompany": "3", 		
    "user": {"_id": "0", "username": "marius"}
  },
  {
    "_id": 1, "rating": 3, "comment": "Loved working here.", "idCompany": 4,
  	"user": {"_id": 0, "username": "marius"}
  }]

```

400 ikke ekisterer, 401 hvis ikke authed

**Create new review**

**Method: POST**

**URL**: host:port/review

**Auth**:TRUE

```json
 {"rating": 3, "comment": "Loved working here.", "idCompany": 8}
```

Returns the new review

```json
 {
  "_id": "5a15bc9f7d44bcad8b253aa2", 
  "rating": 1, 
  "comment": "sucks", 
  "idCompany": "5a15b03b7d44bcad8b253a90", 
  "user": {"username": "marius", "_id":"5a15af797d44bcad8b253a88"}
}
```

200  hvis ok, 400 hvis ikke felter er korrekt, 401 hvis ikke authed



**Update a review**

**Method: PUT**

**URL**: host:port/review/<id>

**Auth**:TRUE

```json
 {"rating": 3, "comment": "Loved working here."}
```

Returns the new review

```json
 {
  "_id": "5a15bc9f7d44bcad8b253aa2", 
  "rating": 1, 
  "comment": "sucks", 
  "idCompany": "5a15b03b7d44bcad8b253a90", 
  "user": {"username": "marius", "_id":"5a15af797d44bcad8b253a88"}
}
```

200  hvis ok, 400 hvis ikke felter er korrekt, 401 hvis ikke authed eller ikke samme bruker



**Delete review by id**

**Method: DELETE**

**URL**: host:port/review/<id>

**Auth**:TRUE

200  hvis ok, 400 hvis ikke felter er korrekt eller ikke samme bruker, 401 hvis ikke authed



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

```http
GET api/company/?name=<term>
```
Returns list over companies where company.name contains `term`.

`term` (string) is not case sensitive, i.e. 'Google' and 'google' would have equal response.



**Filter companies**

Filter companies on min `company.averageRating` and min `company.nComments`

```http
GET host:port/api/companies/?minRating=<N>
```

```http
GET host:port/api/companies/?minComments=<N>
```

```http
GET host:port/api/companies/?minRating=<N>&minComments=<N>
```

Alle returnerer en liste med companies og  status 200 hvis ok, 400 ellers



**Top Companies**

Return top N (int) companies bases on averageRating.

```http
GET host:port/api/company/?top=<N>
```



**Pagination**

Returns companies between skip (int) and size (int)

```http
GET host:port/api/company/?skip=5&size=10
```



**Chaining of filters and pagination**

Chaining of filters and pagination is possible. e.g.

```http
GET host:port/api/companies/?skip=5&size=10&minRating=4.4&minComments=2
```



**Create new company**

**Method: POST**

**URL**: host:port/company

**Auth**:TRUE

```json
{"name": "Facebook"}
```

Returnerer status 200 og objektet, ellers 400 og 401 hvis ikke authed



**Delete company by id**

**Method: DELETE**

**URL**: host:port/company

**Auth**:TRUE

```http
DELETE host:port/api/company/<id>
```

Returnerer status 200 hvis ok, 401 hvis ikke authed, 400 hvis ikke finned



**Update company**

**Method: PUT**

**URL**: host:port/company

**Auth**:TRUE

```json
{"name": "SBanken"}
```

Returnerer company objektet og status 200, 400 hvis ikke felter er korrekt og 401 hvis ikke bruker er autentisert. 


