using BigProject.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


var connection = builder.Configuration.GetConnectionString("DefaultConnection");

//AddDbContext дл€ регистрации контекста базы данных ApiDbContext в качестве сервиса в контейнере зависимостей приложени€.
//ћы указываем, что мы хотим использовать поставщик базы данных PostgreSQL дл€ нашего контекста базы данных, использу€ метод UseNpgsql. “акже мы передаем строку подключени€, полученную из конфигурационного файла, в метод UseNpgsql,
//чтобы установить подключение к базе данных.
builder.Services.AddDbContext<ApiDbContext>(options => options.UseNpgsql(connection));
builder.Services.AddCors();
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors(builder => builder.AllowAnyOrigin()
.AllowAnyHeader()
.AllowAnyMethod());

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI();
//}

app.MapControllers();

app.Run();
