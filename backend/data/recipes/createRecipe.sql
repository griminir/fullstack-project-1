insert into [dbo].[recipes] ([title], [description], [picture])
values (@title, @description, @picture);

select scope_identity() as id;