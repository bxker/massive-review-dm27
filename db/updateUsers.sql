UPDATE users
SET username = $1,
    name= $2,
    birth_date = $3,
    fav_fruit = $4
WHERE
    user_id = $5;

SELECT * FROM users;