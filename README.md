# study_angular

## Comando para gerar project

```ts
    ng new project
```

## Comando para iniciar projeto

```ts
   ng serve --open
```

## Comando para gerar component pai

```ts
    ng g m caminho --routing --route nome-component --module app-routing.module.ts
```

## Para gerar component filho

```ts
    ng g m caminho/nome-component
    ng g c caminho/nome-component
```

## Exportando dados com Output

- Declarando o Output de onde queremos enviar os dados

```ts
@Output() toTransfer = new EventEmitter<any>();
```

- E enviamos atraves o .emit

```ts
this.toTransfer.emit(VALUE);
```

- É chamado o Output onde foi declarado o app-component e recuperado o valor em um
  metodo pegando em um parametro $event

```html
<app-new-transfer (toTransfer)="transfer($event)"></app-new-transfer>
```

## Importando dados com Input

- Declarando o Input onde vamos receber os dados

```ts
@Input() transfer: any;
```

- É chamado o Input onde foi declarado o app-component e passado o valor em o valor
  que foi recuperado em uma variavel

```html
<app-extract [transfer]="transferetion"></app-extract>
```
