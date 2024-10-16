update [dbo].[ingredients]
set [name] = @name,
    [quantity] = @quantity,
    [unit] = @unit
    -- [recipe_id] = @recipe_id
where [id] = @id