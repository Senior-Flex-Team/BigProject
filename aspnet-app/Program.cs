using aspnet_app;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var env = builder.Environment;


string? connection;
if (env.IsDevelopment())
    connection = builder.Configuration.GetConnectionString("DefaultConnection");
else
    connection = Environment.GetEnvironmentVariable("DefaultConnection");


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
