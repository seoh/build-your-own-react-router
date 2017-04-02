
const instances = []
const register = (comp) => instances.push(comp)
const unregister = (comp) => instances.splice(instances.indexOf(comp), 1)
const update = () => instances.forEach(instance => instance.forceUpdate())

export default {
  update,
  register,
  unregister
}
