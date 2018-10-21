
### API/USERS
#POST METHOD:

##SAMPLE INPUT: 
```json
{
    "Email": "shivarajnaidu@gmail.com",
    "Password": "Yuvaraj",
    "EmployeeName": "Yuvaraj",
    "FatherName": "Markandeyan",
    "Address": "Tiruvallur",
    "PermananentAddress": "Tiruvallur",
    "AdhaarNo": "hjsvhjdvhdh",
    "PancardNo": "vjsvjhsvhj",
    "EmployeeContactNo": "+91 9498002109",
    "EmergencyContactNo": "9444070765"
}

```
```json
##SAMPLE OUTPUT:
{
    "_id": "5bcbf3ff4b16b61494a52752",
    "Email": "shivarajnaidu@gmail.com",
    "Password": "$2a$08$r7ns5L6vlqhRaO2oW5LnuOulsmlt0HT2CQSABOqDI8Bexb7NsJYRy",
    "FatherName": "Markandeyan",
    "Address": "Tiruvallur",
    "PermananentAddress": "Tiruvallur",
    "AdhaarNo": "hjsvhjdvhdh",
    "PancardNo": "vjsvjhsvhj",
    "EmployeeContactNo": "+91 9498002109",
    "EmergencyContactNo": "9444070765",
    "__v": 0
}

```

### API/SIGIN/GETINFO:

## POST METHOD:
# SAMPLE INPUT:

```json
{
    "Email": "shivarajnaidu@gmail.com",
    "Password": "Yuvaraj"
   
}
```

# SAMPLE OUTPUT:

```json

"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViY2JmM2ZmNGIxNmI2MTQ5NGE1Mjc1MiIsImlhdCI6MTU0MDA5MzI3OSwiZXhwIjoxNTQwMDk2ODc5fQ.M4KVBT21zA5rk5HOSGzotIktleiWiuG9mvUDs8vcEk8"

```
### API/LEAVE/MAIL:

## POST METHOD:
# SAMPLE INPUT:

```json

{
	
"employeeId": "12345",
 "from":"2018-10-20",
 "to": "2018-10-25",
"description": " i would like to go my sister marriage",
 "approvedBy": "mohan"
	
}

```
#SAMPLE OUTPUT:
```json
{
    "isApproved": "pending",
    "_id": "5bcc355ae9fa6a17e8401cba",
    "employeeId": "12345",
    "from": "2018-10-20T00:00:00.000Z",
    "to": "2018-10-25T00:00:00.000Z",
    "description": " i would like to go my sister marriage",
    "approvedBy": "mohan",
    "createdAt": "2018-10-21T08:14:18.366Z",
    "updatedAt": "2018-10-21T08:14:18.366Z",
    "__v": 0
}
```



