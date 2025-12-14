import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('heavy_machinery');
    const equipment = db.collection('equipment');

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const manufacturer = searchParams.get('manufacturer');

    let query = {};
    if (category) query.category = category;
    if (manufacturer) query.manufacturer = manufacturer;

    const items = await equipment.find(query).limit(50).toArray();

    return NextResponse.json({ equipment: items }, { status: 200 });
  } catch (error) {
    console.error('Error fetching equipment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = client.db('heavy_machinery');
    const equipment = db.collection('equipment');

    const result = await equipment.insertOne({
      ...data,
      createdAt: new Date(),
      status: 'active',
    });

    return NextResponse.json(
      { message: 'Equipment added successfully', id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding equipment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

