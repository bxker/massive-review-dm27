INSERT INTO users
(username, name, birth_date, fav_fruit)
VALUES
($1, $2, $3, $4)
RETURNING *;