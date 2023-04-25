FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["BigProject.csproj", "BigProject/"]
RUN dotnet restore "BigProject/BigProject.csproj"
COPY ["." , "BigProject/"]
WORKDIR "/src/BigProject"
RUN dotnet build "BigProject.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BigProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BigProject.dll"]