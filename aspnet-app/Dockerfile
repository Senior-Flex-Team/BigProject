FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["aspnet-app.csproj", "aspnet-app/"]
RUN dotnet restore "aspnet-app/aspnet-app.csproj"
COPY --from=build /app/wwwroot/swagger /swagger
COPY ["." , "aspnet-app/"]
WORKDIR "/src/aspnet-app"
RUN dotnet build "aspnet-app.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "aspnet-app.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "aspnet-app.dll"]