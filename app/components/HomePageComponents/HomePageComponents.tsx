// components/HomePageComponent.tsx
export default function HomePageComponent({ data }: { data: any }) {
    return (
      <section>
        <h2>Fetched Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    );
  }