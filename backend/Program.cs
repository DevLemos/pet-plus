using backend.Routes;

var builder = WebApplication.CreateBuilder(args);

// Adiciona serviços do Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Ativa o Swagger apenas em ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.EmployeeRoutes();

app.UseHttpsRedirection();
app.Run();