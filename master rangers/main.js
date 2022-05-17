var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('https://www.seekpng.com/png/detail/54-544720_ranger-powers-power-ranger-jungle-fury-red-ranger.png'); 
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('data:image/jpeg;base64,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'); 
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('data:image/jpeg;base64,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'); 
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISExEQEhIWEBAQExASDxAREBITFRUYFxgRFxUYHSggGBolGxUTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHyYvNSsrLS4vNS0tLzYtLS0vLS0tLS0tLS0tLTItLS0tLS0tLS0tLS0rLS0tLS0tLS03K//AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYDBQcEAgj/xAA+EAACAQIEAwYEAwYEBwEAAAAAAQIDEQQFEiEGMUETIlFhcYEHMpGhQrHBFDNyktHhI1JiwjRDU3OCovAV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBQMEBv/EACoRAQACAgEDAwIGAwAAAAAAAAABAgMRBBIhMQVBUTJhExQiM0LRcYGx/9oADAMBAAIRAxEAPwDtIAAAAAAAAAAAAAAVvivimOFWiKU6zV0nyivF/wBA6YsVslumsd1kBxWrxfj5VJasS4xS1x0qEI6Vz6O5YuEeOqrtDGabSfdqKOlxT5a+nuVi8Sv+WyTM1iO8OkAiLvuuXO5JZwAAAAAAAAAAAJIJAgAAAAAAAAAAAAAZxTE46niMTPXWhGcqjupOySvskdrZ+ZeJsvqU8VV0wlZVZ2sm7blZ8w9HHyXxzNqeXWcu4ew+h63Cpzu9morwv7FfzfJlTd+0g4tvvOcVdX5lRynjCvQp1Kb72pd3Wr6X47815GlxOJqVZJtym7+bK9PeXanMyUtNo8y/RXA+KlUwkNTu4OVO/io8vs0b8qnwwwkqeX0lJNOUpzs/Bvb8i1l48PHeZm0zIACVQAAAAAAAAkgkCAAAAAAAAAAAAAA5Nx7g3RxcprZTtUXr1+/5nWTQcWZXTxMFFtak3aSa1L+xExt7OFnjDk3bxPaVGwbi43lGLUb80ntzX2NVKlKrXVNJJuajZLZOT/S9vY33/wCNWg1FRUltfvc7cjc8K5BGlVVSpaU3qavyTfX1K958u2C+PDa157/C44SgqcIQXKMYxXolYygF2dM7nYAAgAAAAAAAAJIJAgAAAAAAAAAACk51xhNVZQoKGiDcZTau3JeC5W6FpzrF9lQq1OsYO3hqey+7RyCjN73+ZPf/AFLxJiO7S4HHrk3a0eFtynPMRVqrXUcqcu7pSSSdrp7G5r4CMpa4twnb5l19V1KvwtNSnpXSSlb0LNm2NVKnOTaT0tR85NbIprvO3Lk49ZumsNFmnEE6U3TThUtzdmt/B78zYZM417VnUc5R/ArxjTfhbq/MoKn4vzbM+DxtaGrsXK7SvZXEzEd5aGf0+tcX6fq/66Dn2NrUqalSm1JTWzSkmn0sz4yPi1zqRpV1FOW0ZrZavBo0UM1nOloq7vuSTtvv0f0ZocXJyk5LbTNJPwa3IpfrmdPJxeNGSJraHaQanhfM/wBow8Jv51eE/wCKPX3Vn7m2Ls+9Jpaaz7AACoAAAAAEkEgQAAAAAAAAAAK18QcSoYRpuynUpx9k9X+0oMKlNpPTVtb5rRX+650PjnCQqYSo5q+jTOHlO9l+Zzdyvpprm7L0uNe+2zwYicXv5e/haWmvUmtUoxpqW0W3du1rHl4gzGpUqtzTjbaNN37q8X5nQMswkKVOMYxSdlqtvd26vqaXifJlWWpbS8f6lfCmHl4/zE2vH22onZuScrd1Wv57pbfUtmVZEqkFKMnTklbUt01zs0YM6wqhShBbRjTS823OO5aspilBW/8AtkUid2mJU5nLtk+nx7NLVyTs4uUp62ouyUdK5Pd77lUw+JWpwe8ZXb9b/wBkdDx61PQucu6vfYqPGnDTwk41qacqMud/wS8H5M6ainiDgZo6pi3mfDefD/EunVqUXfTPvwb5Xit/tb6F9ON5VmtRTp1V/wAuSdl4W3R13BYqNWnGpB3jKKkvfoT393Pn4rRfrn3ZwAHgAAAAAAkgkCAAAAAAAAAABpuMIN4Srbpok/SM4t/ZHNcTVjTuobyfOXX0Ov4iipxlCW6lFxa8mrFAo8BVe0alUiqd9pq7m14W6MtEtPg5qUrMXnXu1uRZ7UjaEryXSXOy8H5FjWL7RpLlzPjiXKqeHhR7OKSu4N9W/F+Iyuktn5FYju8/IyY7z1VjTw8TRXL/ALK+tRG/y6PcXuVvizEqLitvmov6TNxlmaUnTjepTT72znFPm/M5U+uXG30Q9eFp3rQs+qf2N1ilTqKVKaTjJOLTWzKnRzqjTxFNyqKzlo2Tl82yd10NPkGPm8zq0qtSc0sRWpK8ny3cWkdpmJVrW3mGr4iyt4HEOCu6U1rhJ9V1j7fqW74d4795RvtZVoeV9pJeV7P3Pn4j4Vywmp7ypV4q/XTJW/VfQ0/BqqU61CbhNRlem24u1pLbf1sNtebxn4u7ef6dPABDFAAAAAAkgkCAAAAAAAAAAANDxtnzwWFlWik5uUadO6vHU7vfysmb4rPHuDVejDDvbtKnz2TcNKbul9vciZ0tWNy5nj+KauPdHtYqMozVtF0muT97ss+LwLWG2bvZ8pST3i7cjx8P8KKhW78+10q8W4pWTd7et1f2Lp+zwlGzjFp72auc5p1d4devpjUud1kmnKztvLenpSSs0t1z2Z7cPzV3+NvecHG2t2dr/wCW3Qu0cFSXKnTXpCJmjFLkkvRCMP3ROX7KjmWXy0xmot9xN7W6Gtr05xzSdaEW6Tq4eprulHvU4OW7582X/ExvEpmLio1oUWu45qdt13Xe8dul7/VE9HRHZat5su2awjUp172lHVTl5Oyj/Q8tBU5QSWlra1rWuvCx5niKVsbS1WlHDxioNv5VFy1L+ZfQoOT4iblTh2slFzgnHU9Nm/AtMu+Dh3y1md607XDkvRH0RFWSXlYks8AAAAAAEkEgQAAAAAAAAAABWONsbCgqNeo7U4zlB2V3qmtvbZlnK/xxw88fhuwjOMJdpCalJNpW57LyZExuFqzqWiyLNIV51HB6o93S/JI30XsVrhXJf2XVTupSg3GTWyfmizQkn5FojUaTedylE3Pm5EZ7kqPu1zQZ5S/xacrdJU7/AMS/qkb9M12eUr03bmmpL2dyt43Er451ZTeJYzdWk4an2lGKfNyct04+LVrbGDh3K51a8IKElpqRcnpfcs7u/hyL9wxhoVO0lJXlB6Kc9rwjON9vO9zd5VllPDw0QXNuUpP5pyfVvqUp4akeofh4pxxHd7QAXZAAAAAAEkEgQAAAAAAAAAAAAApKzGnGvVvJJ9pNWe3UzrNqKv30V74iYfTi4y6Tpx+qdjQTw8W/7smItLVx+n1vSL9XleK3EFBfjX1SPJLi6iuW/o7lCx+HS5dUTllPvLyRXVt629VfS8etzMrnV4vb+WD/AJWTlGa1MZXVBuVNNSepKLtZFfjzLD8OaGrE1J2+Wm7erdi0017qZOLhx47W14h0DAYKNGLjHq9Un4yslf7HpAIYczsAAAAAAAAJIJAgAAAAAAAAAAAABQvijR/4ep5yh+pT0+R0j4gYLtMHNrnTaqL0Wz+z+xzSlukXo+g4NurBEfHZgzPofOXcz6zPoMuXNj+TSj9p7PEuvwxof4dep41Iw/lV/wBUUiT2Z0r4f0NODg+s51J/+1l9oom7L59unBMfMrGADmwQAAAAAAAAkgkCAAAAAAAAAAAAAGLF0FOE4PlKEov0ascTpq23g7HcWcOx9OVOvVg7q1SSt77Fqz3a/pU76qsGYvkfeB+V+pgxz5ehnwktre7Lfybc/ts7ezOs8KpLCYe3/Rg/dq7OSVXs/Q7DkFFww1CL5qjTT9dKIuxvUvoj/L3gAoxgAAAAAAAAkgkCAAAAAAAAAAAAAA5Xx9UjLGOMUrqEdTS6+ftY6oV/MsBT7ZzcVeSTbfXoNzHh6uJnjDfqmHJcRTb5Jv2Z7sHl1XTfs5W8Ur/bmdEqYWG3dXO/Izxgrcl9Bu29vdb1adairm9PDPXGMotXlGO6a5ux2emrJLySK1isLCSs0b/AUNFOEN9opb7kzMz5eLlcn8bXbw9AAIeQAAAAAAAAJIJAgAAAAAAAAAAAAANPxBWjBQlLZX036J9DcGj4zwvaYOqusUpr/wAf7XIl0xVi14iWhx+fU4K6lFvwTX5cz04LO6M4p64Jv8OpXXscuktzIisdXy3p9Ix68uuYStGpUUE7vm15LcsRQvhjhH/i1Xe21NeHi/0L6WjfuxOTijFkmkTvQACXAAAAAAAAAJIJAgAAAAAAAAAAAAAPivSU4yg91KLi15NWZ9gJidS4Di6WipOP+Wco/R2IizYcS01HGV9Nv30rW3V27/ncyZFgu3xNKnbZzTkrfhW7Kw+yjJrF1T8bdT4SwPY4WlG1pOPaS/ilv+Vl7G4ISJLPj8l5vabT7gACgAAAAAAAASQSBAAAAAAAAAAAAACJSS3bSXi9kUni7jaFOMqWHkpVHeLqL5Yej6sz8Z8PYvEzUqVWHZqNlSlKcd+srrZlQXAGPk7ONGK8e1v+hE7aPEx8aP15bf6VntG3du+993v6lo4Drx/baWq+6lFerXX6M+s1+HGJpKEqE1Xb/exdoaX/AKPFc+ZXaM5U5pq8ZRfNbSTXgRETDarnx8rHatHfQV7gvPHiqT171KbUZStbVfk7eJYSz5fJjnHaaz7AACgAAAAAAAASQSBAJAEAkAQCQBAJAEAkAQCQBBX63BeAlKUnho3k23adRK78EpWXsWEBMWmPEtdlGS4fCqSoUlTUmnKzlJtrldybZsCQCZ35QCQEIBIAgEgCASAIJAA//9k='); 
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('data:image/jpeg;base64,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'); 
		console.log("b");
	}
	
}
