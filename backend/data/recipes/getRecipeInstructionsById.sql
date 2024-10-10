select distinct
r.id as recipeId,
ins.id,
ins.step
from [dbo].[recipes] as r
inner join instructions as ins on ins.recipeId = r.id
where r.id=@id
