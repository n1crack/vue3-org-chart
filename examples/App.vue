<template>
  <div class="wrapper">
    <vue3-org-chart :data="data">
        <template #node="{item, nodes, show, handleChildren}">
            <div class="node-item" :class="{'active': show, 'passive' : !show }">
            <div>
                <img class="avatar" :src="item.imageUrl" alt="avatar">
            </div>
                <div>
                    <div>{{ item.id }} ({{ nodes.length }})</div>
                    <div>{{ item.name }}</div>
                </div>
            </div>
            <div style="text-align: center;">
                <button class="node-btn-toggle" v-if="nodes.length" @click="handleChildren">
                    {{ show ? '-' : '+' }}
                </button>
            </div>
        </template>
    </vue3-org-chart>
  </div>
</template>
<script setup>

const data = [
    {
      "name": "John Doe",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome38@example.com",
      "id": "A-8066",
      "parentId": ""
    },
    {
      "name": "Davolio Nancy",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8067",
      "parentId": "A-8066"
    },
    {
      "name": "Jane Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome4@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8068",
      "parentId": "A-8066"
    },
    {
      "name": "Jane Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome4@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8069",
      "parentId": "A-8066"
    },
    {
      "name": "Jane Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome4@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8070",
      "parentId": "A-8066"
    },
    {
      "name": "Jane Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome4@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8071",
      "parentId": "A-8067"
    },
    {
      "name": "Jane Doe",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Linear Manager",
      "id": "A-8072",
      "parentId": "A-8067"
    },
    {
      "name": "Peacock Margaret",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CEO",
      "id": "A-673",
      "parentId": "A-8067"
    },
    {
      "name": "Buchanan Steven",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Head of direction",
      "id": "A-8074",
      "parentId": "A-8067"
    },
    {
      "name": "Adam Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior sales manager",
      "id": "A-8075",
      "parentId": "A-8067"
    },
    {
      "name": "King Robert",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Sales Manager",
      "id": "A-8076",
      "parentId": "A-8067"
    },
    {
      "name": "West Adam",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "CTO",
      "id": "A-8077",
      "parentId": "A-8067"
    },
    {
      "name": "Carlos Smith",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Trader",
      "id": "A-8078",
      "parentId": "A-8067"
    },
    {
      "name": "Yoshi Nagase",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Head of laboratory",
      "id": "A-8079",
      "parentId": "A-8067"
    },
    {
      "name": "Peter Wilson",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Head of channels",
      "id": "A-8080",
      "parentId": "A-8068"
    },
    {
      "name": "Carlos Diaz",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Android Developer",
      "id": "A-8081",
      "parentId": "A-8068"
    },
    {
      "name": "Sven Petersen",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Developer",
      "id": "A-8082",
      "parentId": "A-8068"
    },
    {
      "name": "Peter Wilson",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Head of channels",
      "id": "A-8083",
      "parentId": "A-8069"
    },
    {
      "name": "Carlos Diaz",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Android Developer",
      "id": "A-8084",
      "parentId": "A-8069"
    },
    {
      "name": "Sven Petersen",
      "imageUrl": "https://i.pravatar.cc/150?u=awesome3@example.com",
      "area": "Corporate",
      "profileUrl": "http://example.com/employee/profile",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Senior Developer",
      "id": "A-8085",
      "parentId": "A-8069"
    },
];
</script>

<style>
body {
  margin: 0;
  background: #eeeeee;
}
.wrapper {
  max-width: 800px;
  margin: 80px auto;
}
.btn{
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;
  outline: none;
}

.node-item {
  display: flex;
  width: 12rem;
  border-radius: 0.35rem;
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
}

.node-item > :not([hidden]) ~ :not([hidden]) {
  margin-left: 1rem;
}
.node-item:hover {
  background-color: rgb(226 232 240);
}
.node-item.active {
  border-color: rgb(165 180 252);
  background-color: rgb(224 231 255);
}
.node-item.passive {
  background-color: rgb(248 250 252)
}

.node-item .avatar {
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
}

.node-btn-toggle {
    padding: 1px;
  cursor: pointer;
  height: 1rem;
  width: 1rem;
  border: 1px solid #e2e8f0;
  background-color: rgb(255 255 255);
  font-size: 0.75rem;
  line-height: 10px;
}

</style>
