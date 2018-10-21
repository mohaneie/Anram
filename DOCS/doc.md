
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

```JSON

{
	"name": "mohanbabu",
	"email": "mohaneie88@gmail.com",
	"leavefromdate": "21-10-2018",
	"todate": "25-10-2018",
	"description": "I am not feeling well"
	
}

```
#SAMPLE OUTPUT:
```JSON
{
    "_id": "5bcc130dabb4810968471d12",
    "employeeId": "5bcbf3ff4b16b61494a52752",
    "leavefromdate": "21-10-2018",
    "leaveuptodate": "25-10-2018",
    "description": "I am not feeling well",
    "appliedon": "monday",
    "__v": 0
}
```



