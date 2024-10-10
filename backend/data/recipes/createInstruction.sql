insert into [dbo].[instructions] (recipeId, step)
values (@recipeId, @step);

select scope_identity() as id;