export function isValidEmail(value) {
  const re = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
  return !!value.match(re);
}
