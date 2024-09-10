
select r.id,
r.title,
[r].[description],
r.picture,
ing.id,
ing.quantity,
ing.unit,
[ing].[name]
from [dbo].[recipes] as r
inner join ingredients as ing on
ing.recipeId = r.id
where r.id=@id