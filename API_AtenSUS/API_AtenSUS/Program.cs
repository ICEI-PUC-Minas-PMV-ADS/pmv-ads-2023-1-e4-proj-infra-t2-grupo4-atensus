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



builder.Services.AddCors(options =>
{
    options.AddPolicy("Development",
        builder =>
            builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());


    options.AddPolicy("Production",
        builder =>
            builder
                .WithMethods("GET")
                .WithOrigins("http://desenvolvedor.io")
                .SetIsOriginAllowedToAllowWildcardSubdomains()
                //.WithHeaders(HeaderNames.ContentType, "x-custom-header")
                .AllowAnyHeader());
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("Development");


    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("Development"); // Usar apenas nas demos => Configuração Ideal: Production

app.UseAuthorization();
app.UseCors((g) => g.AllowAnyOrigin()
                                    .AllowAnyMethod()
                                    .AllowAnyHeader());

app.MapControllers();

app.Run();
