const Profile = async () => {
  await delay();
  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};

export default Profile;

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
}
