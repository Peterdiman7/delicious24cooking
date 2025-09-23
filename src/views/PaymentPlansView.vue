<!-- src/views/PlansView.vue -->
<template>
  <div class="plans-page">
    <h1>Choose Your Recipe Plan</h1>
    <div class="plans-grid">
      <div
        v-for="plan in plans"
        :key="plan.id"
        :class="['plan-card', plan.bestValue ? 'best-value' : '']"
      >
        <div v-if="plan.bestValue" class="best-value-label">Best Value</div>
        <h2>{{ plan.name }}</h2>
        <p class="price">{{ plan.price }}</p>
        <ul class="features">
          <li v-for="feature in plan.features" :key="feature">
            ✅ {{ feature }}
          </li>
        </ul>
        <button class="btn" @click="selectPlan(plan)">Select Plan</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface Plan {
  id: number
  name: string
  price: string
  features: string[]
  bestValue?: boolean
}

const plans = ref<Plan[]>([
  {
    id: 1,
    name: "Starter Plan",
    price: "Free",
    features: ["Access to 10 recipes", "Step-by-step instructions", "Basic ingredients list"],
  },
  {
    id: 2,
    name: "Home Cook Plan",
    price: "$4.95 / month",
    features: ["Access to 100+ recipes", "Nutritional information", "Save favorite recipes"],
  },
  {
    id: 3,
    name: "Family Plan",
    price: "$9.95 / month",
    features: ["Access to 250+ recipes", "Weekly meal planner", "Shopping list generator"],
  },
  {
    id: 4,
    name: "Chef’s Choice",
    price: "$14.95 / month",
    features: ["Unlimited recipe access", "HD cooking videos", "Exclusive seasonal recipes"],
    bestValue: true,
  },
  {
    id: 5,
    name: "Annual Plan",
    price: "$99.95 / year",
    features: ["All Chef’s Choice features", "Save 40% yearly", "Exclusive holiday recipes"],
  },
])

const selectPlan = (plan: Plan) => {
  alert(`You selected the ${plan.name} plan!`)
}
</script>

<style scoped>
.plans-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.plan-card {
  padding: 2rem;
  border-radius: 16px;
  background-color: #f0fdfa;
  position: relative;
  transition: transform 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-5px);
}

.best-value {
  background-color: #14b8a6;
  color: white;
}

.best-value-label {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background: #facc15;
  color: #000;
  font-weight: bold;
  border-radius: 0 0 12px 12px;
}

.plan-card h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.features li {
  margin-bottom: 0.5rem;
  text-align: left;
}

.btn {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #14b8a6;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn:hover {
  background-color: #0f766e;
}
</style>

