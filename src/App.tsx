import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { MemberDashboard } from './components/MemberDashboard';
import { QualificationProgress } from './components/QualificationProgress';
import { RenewalManagement } from './components/RenewalManagement';
import { EventHistory } from './components/EventHistory';
import { MyPage } from './components/MyPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { MemberManagement } from './components/admin/MemberManagement';
import { DistributionManagement } from './components/admin/DistributionManagement';
import { EventManagement } from './components/admin/EventManagement';
import { RenewalManagementAdmin } from './components/admin/RenewalManagementAdmin';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<'member' | 'admin'>('member');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ビューモード切り替え */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-gray-900">LINE会員管理システム</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('member')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'member'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Smartphone className="size-4" />
              会員ビュー
            </button>
            <button
              onClick={() => setViewMode('admin')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'admin'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Monitor className="size-4" />
              運営ビュー
            </button>
          </div>
        </div>
      </div>

      {/* 会員ビュー（LINEミニアプリ風） */}
      {viewMode === 'member' && (
        <div className="flex justify-center py-8 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden" style={{ minHeight: '812px' }}>
            <Tabs defaultValue="dashboard" className="w-full">
              <div className="border-b bg-white sticky top-0">
                <TabsList className="w-full h-auto grid grid-cols-5 bg-transparent p-0">
                  <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-green-600">
                    進捗
                  </TabsTrigger>
                  <TabsTrigger value="qualification" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-green-600">
                    資格
                  </TabsTrigger>
                  <TabsTrigger value="renewal" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-green-600">
                    更新
                  </TabsTrigger>
                  <TabsTrigger value="events" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-green-600">
                    履歴
                  </TabsTrigger>
                  <TabsTrigger value="mypage" className="data-[state=active]:bg-green-50 data-[state=active]:text-green-600 py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-green-600">
                    マイ
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="dashboard" className="m-0">
                <MemberDashboard />
              </TabsContent>
              <TabsContent value="qualification" className="m-0">
                <QualificationProgress />
              </TabsContent>
              <TabsContent value="renewal" className="m-0">
                <RenewalManagement />
              </TabsContent>
              <TabsContent value="events" className="m-0">
                <EventHistory />
              </TabsContent>
              <TabsContent value="mypage" className="m-0">
                <MyPage />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      {/* 運営ビュー（Web管理画面） */}
      {viewMode === 'admin' && (
        <div className="max-w-7xl mx-auto py-6 px-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="dashboard">ダッシュボード</TabsTrigger>
              <TabsTrigger value="members">会員管理</TabsTrigger>
              <TabsTrigger value="distribution">配信管理</TabsTrigger>
              <TabsTrigger value="events">イベント管理</TabsTrigger>
              <TabsTrigger value="renewal">更新管理</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <AdminDashboard />
            </TabsContent>
            <TabsContent value="members">
              <MemberManagement />
            </TabsContent>
            <TabsContent value="distribution">
              <DistributionManagement />
            </TabsContent>
            <TabsContent value="events">
              <EventManagement />
            </TabsContent>
            <TabsContent value="renewal">
              <RenewalManagementAdmin />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
