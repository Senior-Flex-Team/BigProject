using BigProject.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


var connection = builder.Configuration.GetConnectionString("DefaultConnection");

//AddDbContext ��� ����������� ��������� ���� ������ ApiDbContext � �������� ������� � ���������� ������������ ����������.
//�� ���������, ��� �� ����� ������������ ��������� ���� ������ PostgreSQL ��� ������ ��������� ���� ������, ��������� ����� UseNpgsql. ����� �� �������� ������ �����������, ���������� �� ����������������� �����, � ����� UseNpgsql,
//����� ���������� ����������� � ���� ������.
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
