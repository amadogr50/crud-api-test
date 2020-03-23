

*API Reference*
-----
Base Url: https://marito-crud-api-test.herokuapp.com/

**Create User**
  
  Creates user

* **URL**

  api/users/

* **Method:**

  `POST`
  
*  **JSON Body**
 
    **Parameters:**
  
    `nick = [string]`
    
    `name = [string]`
    
    `lastName = [string]`
    
    `password = [string]`
    
    `role = [string] of ['Admin', 'Operador', 'Administrativo']`
    
    `email = [string]`

**Delete User**
  
  Deletes user with given id.

* **URL**

  api/users/:id

* **Method:**

  `DELETE`
  
*  **Params**
 
   `id=[integer]`

**Get User**
  
  Returns json data about a single user.

* **URL**

  api/users/:id

* **Method:**

  `GET`
  
*  **Params**
 
   `id=[integer]`
    
**Get User list**
  
  Returns json data with a list of users.

* **URL**

  api/users/

* **Method:**

  `GET`
  
*  **JSON Body**

   **Parameters:**
 
   `roles = [array<String>] e.g. ["Admin", "Operador"]`
   
   `page = [integer]`
   
   `perPage = [integer]`
   
   **Default values**
   
   `roles = ["Admin", "Operador", "Administrativo"]`
   
   `page = 0`
   
   `perPage = 10`