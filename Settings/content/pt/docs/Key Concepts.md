---
title: "Principais conceitos"
weight: 2
description: >
  Nesta seção, você encontra definições para os principais termos e expressões
  utilizados na documentação e no Beagle.
---

---

### **Backend For Frontend**

Conhecido também como **BFF**, é o servidor que possibilita enviar objetos JSON para serem renderizados e, consequentemente, visualizados no frontend. Este componente permite que telas e regras de negócio sejam escritas uma única vez para, em seguida, serem renderizadas de forma nativa em cada plataforma onde o Beagle está presente. O consumo das APIs que proveem os dados para a aplicação antes executado pelos fronts, agora é de responsabilidade do BFF.

### **Declarative Views**

Paradigma no qual os layouts são construídos de forma simplificada, uma vez que, o foco está no quê o layout deve ser, deixando o Beagle resolver sua configuração. Esses layouts declarativos são construídos usando widgets tanto no **BFF** e **Android** escritos em **Kotlin** e no **iOS** em **Swift**.

### **Design System**

É a estrutura que contém todos os componentes e propriedades padrão para um produto ou serviço. No desenvolvimento, é essencial que o repositório Design System mantenha em um só lugar estilos de componentes, resources e temas daquela aplicação.

Para que o Beagle possa trabalhar com o design system da sua aplicação, é necessário ter todos esses estilos implementados para que eles possam ser visualizados no momento em que os arquivos forem renderizados.

### **Layout Engine**

Ferramenta que cuida da **renderização dos elementos visuais** nativos de uma aplicação. Quando o Beagle desserializa as informações contidas no JSON, o layout engine entra em ação renderizando os componentes gerados com base no Design System da aplicação. O Beagle usa o[**Yoga Layout**](https://yogalayout.com/) para renderizar nativamente os componentes nas plataformas Android e iOS e construir seus respectivos layouts através dos conceitos do [**Flexbox**](features/layout-de-componentes/).

### **Server-Driven UI**

É o conceito no qual um backend específico \(BFF\) **consome os dados da aplicação** e os fornece ao frontend junto com suas respectivas **estruturas visuais** através de um ou mais JSONs, ou seja, ele não só informa o conteúdo da tela, mas também sua estrutura, além do fluxo dessas páginas se houver.
