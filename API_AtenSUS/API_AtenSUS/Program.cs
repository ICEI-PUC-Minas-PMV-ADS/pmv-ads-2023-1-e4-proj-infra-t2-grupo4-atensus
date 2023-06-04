using API_AtenSUS.Models;
using API_AtenSUS.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<PacientesDatabaseSettings>
    (builder.Configuration.GetSection("DevNetStoreDatabase")); //Objeto pego do appsettings.json

builder.Services.AddSingleton<PacientesServices>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
}));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors((g) => g.AllowAnyOrigin() 
                                     .AllowAnyMethod()
                                     .AllowAnyHeader());

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors((g) => g.AllowAnyOrigin());
 
app.MapControllers();

app.Run();
