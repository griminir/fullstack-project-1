update [dbo].[recipes]
set [title] = @title,
    [description] = @description,
    [picture] = @picture,
where [id] = @id