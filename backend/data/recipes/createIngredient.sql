insert into [dbo].[ingredients] (recipeId, quantity, unit, [name])
values (@recipeId, @quantity, @unit, @name);

select scope_identity() as id;