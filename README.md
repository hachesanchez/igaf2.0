# igaf2.0


| HTTM Method   |  URI path     |  Description  |  JSON        |
| ------------- | ------------- | ------------- | ------------- |
| GET | `/` | index page |
| GET | `/recipes` | Recipes list |
| GET | `/recipes/:id`| Recipe details |
| GET | `/create` | New chef recipe from render |
| POST | `/create` | New chef recipe from handler |
| GET | `/chefs` | Chefs list |
| GET | `/chefs/:id` | Chefs details |
| GET | `/profile/:id` | User`s profile |
| GET | `/recipes/:id` | Recipe edit from render |
| POST | `/recipes/:id` | Recipe edit from handler |
| GET | `/register` | Sign up from render |
| POST | `/register` | Sign up from handler |
| GET | `/login` | Log in from render |
| POST | `/login` | Log in from handler |
| POST | `/logout` | Log out from handler |

| GET | `/recipe/search` | Recipe search from render |
| POST | `/recipes` | Recipe search from handler |

| GET | `/chef-recipes` | Recipes list  |
| GET | `/chef-recipes/:id`| Recipe details |
 






- Cómo crear ramas (¡solo necesario una vez por dev!):
    1. Creamos la rama: rama main ---> git branch <nombre-de-la-rama>
    2. Cambiar a nuestra propia rama para trabajar: git checkout <nombre-de-la-rama>

- Cómo comitear trabajando en ramas:
    1. Dev 1 guarda cambios: rama dev1 ---> git add .; git commit -m 'commit message'
    2. Dev 1 cambia de rama: rama dev1 ---> git checkout main
    3. Dev 1 mergea el código de su rama a la rama principal: rama main ---> git merge dev1
    4. Dev 1 sube los cambios de su rama principal a repo remoto: rama main ---> git push origin main
    5. Dev 2 guarda cambios: rama dev2 ---> git add .; git commit -m 'commit message'
    6. Dev 2 cambia de rama: rama dev2 ---> git checkout main
    7. Dev 2 mergea el código de su rama a la rama principal: rama main ---> git merge dev2
    8. Dev 2 se baja los cambios del repo remoto a su rama principal: rama main ---> git pull origin main
    9. (Si hay conflictos, dev 2 deberá solucionarlos y guardarlos rama main ---> git add.; git commit)
    10. Dev 2 sube su rama principal ya fusionada a remoto: rama main ---> git push origin main
    11. Dev 1 se baja el código de remoto ya fusionado y sin conflictos: rama main ---> git pull origin main
    12. Ambos dev van a su rama: rama main ---> git checkout dev1/dev2
    13. Ambos dev fusionan el código de la rama principal a la suya: rama dev1/dev2 ---> git merge main